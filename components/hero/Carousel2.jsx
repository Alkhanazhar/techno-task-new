import React, { Children, useMemo } from "react";

const Carousel2 = ({
  children,
  visibleItemsCount = 1,
  isInfinite,
  withIndicator,
}) => {
  const indicatorContainerRef = React.useRef(null);
  const [timeoutInProgress, setTimeoutInProgress] = React.useState(false);

  const originalItemsLength = useMemo(
    () => Children.count(children),
    [children]
  );

  const isRepeating = useMemo(
    () => isInfinite && Children.count(children) > visibleItemsCount,
    [children, isInfinite, visibleItemsCount]
  );

  const [currentIndex, setCurrentIndex] = React.useState(
    isRepeating ? visibleItemsCount : 0
  );
  const [isTransitionEnabled, setTransitionEnabled] = React.useState(true);
  const [touchPosition, setTouchPosition] = React.useState(null);

  React.useEffect(() => {
    if (isRepeating) {
      if (
        currentIndex === visibleItemsCount ||
        currentIndex === originalItemsLength
      ) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, visibleItemsCount, originalItemsLength]);

  React.useEffect(() => {
    if (withIndicator) {
      const active =
        indicatorContainerRef.current?.querySelector(".dots-active");
      if (active) {
        let index = active.getAttribute("data-index");
        if (index !== null && indicatorContainerRef.current?.scrollTo) {
          indicatorContainerRef.current?.scrollTo({
            left: ((Number(index) - 2) / 5) * 50,
            behavior: "smooth",
          });
        }
      }
    }
  }, [withIndicator, currentIndex]);

  const nextItem = () => {
    const isOnEdgeForward = currentIndex > originalItemsLength;
    if (isOnEdgeForward) setTimeoutInProgress(true);

    if (isRepeating || currentIndex < originalItemsLength - visibleItemsCount)
      setCurrentIndex((prev) => prev + 1);
  };

  const previousItem = () => {
    const isOnEdgeBack = isRepeating
      ? currentIndex <= visibleItemsCount
      : currentIndex === 0;

    if (isOnEdgeBack) setTimeoutInProgress(true);

    if (isRepeating || currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;
    const diff = touchPosition - e.touches[0].clientX;
    if (diff > 5) nextItem();
    if (diff < -5) previousItem();
    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(originalItemsLength);
      } else if (currentIndex === originalItemsLength + visibleItemsCount) {
        setTransitionEnabled(false);
        setCurrentIndex(visibleItemsCount);
      }
    }
    setTimeoutInProgress(false);
  };

  const extraPreviousItems = useMemo(() => {
    let output = [];
    for (let i = 0; i < visibleItemsCount; i++) {
      output.push(Children.toArray(children)[originalItemsLength - 1 - i]);
    }
    return output.reverse();
  }, [children, originalItemsLength, visibleItemsCount]);

  const extraNextItems = useMemo(() => {
    let output = [];
    for (let i = 0; i < visibleItemsCount; i++) {
      output.push(Children.toArray(children)[i]);
    }
    return output;
  }, [children, visibleItemsCount]);

  const renderDots = useMemo(() => {
    let output = [];
    const localShow = isRepeating ? visibleItemsCount : 0;
    const localLength = isRepeating
      ? originalItemsLength
      : Math.ceil(originalItemsLength / visibleItemsCount);
    const calculatedActiveIndex =
      currentIndex - localShow < 0
        ? originalItemsLength + (currentIndex - localShow)
        : currentIndex - localShow;

    for (let i = 0; i < localLength; i++) {
      let className = "";
      if (calculatedActiveIndex === i) className = "dots-active";
      else if (Math.abs(calculatedActiveIndex - i) <= 1)
        className = "dots-close";
      else className = "dots-far";

      output.push(<div key={i} data-index={i} className={className} />);
    }

    return output;
  }, [currentIndex, isRepeating, originalItemsLength, visibleItemsCount]);

  const isNextButtonVisible = useMemo(
    () => isRepeating || currentIndex < originalItemsLength - visibleItemsCount,
    [isRepeating, currentIndex, originalItemsLength, visibleItemsCount]
  );

  const isPrevButtonVisible = useMemo(
    () => isRepeating || currentIndex > 0,
    [isRepeating, currentIndex]
  );

  return (
    <div className="carousel" data-visible={visibleItemsCount}>
      <div className="carousel-wrapper">
        {isPrevButtonVisible && (
          <button
            disabled={timeoutInProgress}
            className="left-arrow-button"
            onClick={previousItem}
          >
            <span className="left-arrow" />
          </button>
        )}

        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleItemsCount)
              }%)`,
              transition: !isTransitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {isRepeating && extraPreviousItems}
            {children}
            {isRepeating && extraNextItems}
          </div>
        </div>

        {isNextButtonVisible && (
          <button
            disabled={timeoutInProgress}
            className="right-arrow-button"
            onClick={nextItem}
          >
            <span className="right-arrow" />
          </button>
        )}
      </div>

      {withIndicator && (
        <div ref={indicatorContainerRef} className="indicator-container">
          {renderDots}
        </div>
      )}
    </div>
  );
};

export default Carousel2;
