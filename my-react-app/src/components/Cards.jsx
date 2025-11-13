export default function Cards({ data, currentView }) {
  const label = currentView === "daily" ? "Yesterday" : "Last Week";

  return (
    <section className="cards">
      {data.map((item) => {
        const { title, timeframes } = item;
        const current = timeframes[currentView]?.current ?? 0;
        const previous = timeframes[currentView]?.previous ?? 0;

        return (
          <div className="card" key={title}>
            <div className="card-header"></div>
            <div className="card-content">
              <div className="top">
                <h2>{title}</h2>
                <span>...</span>
              </div>
              <p>{current}hrs</p>
              <small>
                {label} - {previous}hrs
              </small>
            </div>
          </div>
        );
      })}
    </section>
  );
}
