type CreamJarProps = {
  className?: string
}

export function CreamJar({ className = '' }: CreamJarProps) {
  return (
    <div className={`cream-jar ${className}`} aria-hidden="true">
      <div className="jar-bokeh">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="jar-lid">
        <div className="lid-disk" />
        <div className="lid-edge" />
      </div>

      <div className="jar-vessel">
        <div className="jar-rim" />
        <div className="jar-wall">
          <div className="cream-mound">
            <div className="cream-body" />
            <div className="cream-peak" />
            <div className="cream-ridge ridge-a" />
            <div className="cream-ridge ridge-b" />
            <div className="cream-ridge ridge-c" />
            <div className="cream-highlight" />
          </div>
          <div className="jar-sheen" />
        </div>
        <div className="jar-foot" />
      </div>

      <div className="jar-droplets">
        <span className="drop d1" />
        <span className="drop d2" />
        <span className="drop d3" />
        <span className="drop d4" />
        <span className="drop d5" />
        <span className="drop d6" />
        <span className="drop d7" />
        <span className="splash s1" />
        <span className="splash s2" />
      </div>

      <div className="jar-pearls">
        <span className="pearl p1" />
        <span className="pearl p2" />
        <span className="pearl p3" />
        <span className="pearl p4" />
        <span className="pearl p5" />
      </div>

      <div className="jar-shadow" />
    </div>
  )
}
