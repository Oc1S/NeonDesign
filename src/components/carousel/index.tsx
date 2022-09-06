import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

const prefix = 'neon-carousel';

type dotType = 'circle' | 'rectangle';

export interface CarouselProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  duration?: string;
  children?: React.ReactNode;
  autoplay?: boolean;
  keepAlive?: boolean;
  interval?: number;
  dotType?: dotType;
}

const Carousel: React.FC<CarouselProps> = ({
  className,
  width = 640,
  height,
  duration: transitionDuration = '0.7s',
  interval: intervalTime = 3000,
  children: childrenProp,
  autoplay,
  style,
  keepAlive,
  dotType = 'rectangle',
  ...rest
}) => {
  childrenProp = Array.isArray(childrenProp) ? childrenProp : [childrenProp];
  const [children, setChildren] = useState(childrenProp);

  const [page, setPage] = useState(1);

  const childrenCountRef = useRef((children as Array<React.ReactNode>).length);
  const totalRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const availableRef = useRef(true);

  const intervalCallbackRef = useRef<() => void>();
  const autoplayTimer = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (Array.isArray(children)) {
      totalRef.current =
        childrenCountRef.current !== 1
          ? childrenCountRef.current + 2
          : childrenCountRef.current + 3;
      const firstChild = children[0];
      const lastChild = children[childrenCountRef.current - 1];

      childrenCountRef.current !== 1
        ? setChildren([
            { ...lastChild, id: nanoid() },
            ...children,
            { ...firstChild, id: nanoid() },
          ])
        : setChildren([
            { ...lastChild, id: nanoid() },
            ...children,
            { ...firstChild, id: nanoid() },
            { ...firstChild, id: nanoid() },
          ]);
    }
  }, []);

  useLayoutEffect(() => {
    if (page === 0) {
      setTimeout(() => {
        if (typeof containerRef.current?.style.left === 'string') {
          containerRef.current.style.left = `${(2 - totalRef.current) * width}px`;
        }

        if (typeof containerRef.current?.style.transitionProperty === 'string') {
          containerRef.current.style.transitionProperty = 'none';
        }
      }, 700);
    } else if (page === totalRef.current - 1) {
      setTimeout(() => {
        if (typeof containerRef.current?.style.transitionProperty === 'string') {
          containerRef.current.style.transitionProperty = 'none';
        }
        if (typeof containerRef.current?.style.left === 'string') {
          containerRef.current.style.left = `${-width}px`;
        }
      }, 700);
    } else {
      if (typeof containerRef.current?.style.transitionProperty === 'string') {
        containerRef.current.style.transitionProperty = 'all';
      }
      /* if (typeof containerRef.current?.style.left === 'string') {
        containerRef.current.style.left = `${-(page * width)}px`;
      } */
    }
  }, [page]);

  // refresh interval cb
  useEffect(() => {
    intervalCallbackRef.current = next;
  });
  // autoplay control
  useEffect(() => {
    if (!autoplay) return;
    startInterval();
    return () => autoplayTimer.current && clearInterval(autoplayTimer.current);
  }, []);

  // 页面不显示时关闭定时器
  useEffect(() => {
    if (!keepAlive && autoplay) {
      let visibilityChangeListener = () => {
        if (document.visibilityState === 'hidden') {
          stopInterval();
        } else {
          startInterval();
        }
      };
      document.addEventListener('visibilitychange', visibilityChangeListener);
      return () => {
        document.removeEventListener('visibilitychange', visibilityChangeListener);
      };
    }
  }, []);

  const startInterval = () => {
    !!autoplayTimer.current && clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      intervalCallbackRef.current?.();
    }, intervalTime);
  };

  const stopInterval = () => {
    autoplayTimer.current && clearInterval(autoplayTimer.current);
  };

  const next = () => {
    page === totalRef.current - 1 ? goTo(2) : goTo(page + 1);
  };
  const prev = () => {
    page === 0 ? goTo(totalRef.current - 3) : goTo(page - 1);
  };

  const goTo = (page: number): void => {
    if (!availableRef.current) return;
    setPage(page);
    availableRef.current = false;
    setTimeout(() => {
      availableRef.current = true;
    }, 700);
  };

  /* 处理类名 */
  const classes = classNames(`${prefix}`, className);
  const dotClasses = classNames(
    `${prefix}-dot`,
    dotType === 'circle' ? `${prefix}-dot-circle` : `${prefix}-dot-rectangle`,
  );

  return (
    <div
      className={classes}
      style={{ ...style, width, height }}
      {...rest}
      onMouseOver={stopInterval}
      onMouseOut={startInterval}
    >
      {/* leftArrow */}
      <span className={`${prefix}-arrow-left`} onClick={prev}>
        &lt;
      </span>
      {/* container */}
      <div
        className={`${prefix}-container`}
        style={{
          left: -(page * width),
          transitionDuration,
          // transition: page === 0 || page === totalRef.current - 1 ? '' : '0.7s',
        }}
        ref={containerRef}
      >
        {children}
      </div>
      {/* rightArrow */}
      <span className={`${prefix}-arrow-right`} onClick={next}>
        &gt;
      </span>
      {/* dots */}
      <div className={`${prefix}-dots`}>
        {Array.isArray(childrenProp) &&
          childrenProp.map((_, index) => (
            <span
              className={`${dotClasses} ${
                page === index + 1 ||
                (index === 0 && page === totalRef.current - 1) ||
                (index === childrenCountRef.current - 1 && page === 0)
                  ? 'neon-carousel-dot-active'
                  : ''
              }`}
              key={index}
              onClick={() => goTo(index + 1)}
            ></span>
          ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.string,
  autoplay: PropTypes.bool,
  keepAlive: PropTypes.bool,
  interval: PropTypes.number,
  dotType: PropTypes.oneOf(['circle', 'rectangle']),
};

export default Carousel;
