type CreamJarProps = {
  className?: string
}

export function CreamJar({ className = '' }: CreamJarProps) {
  return (
    <div className={`cream-jar ${className}`} aria-hidden="true">
      <div className="jar-lid">
        <div className="lid-top" />
        <div className="lid-rim" />
      </div>
      <div className="jar-body">
        <div className="jar-glass">
          <div className="cream-fill">
            <div className="cream-peak" />
            <div className="cream-swirl swirl-a" />
            <div className="cream-swirl swirl-b" />
          </div>
          <div className="jar-label">
            <span>ORRIS</span>
            <small>Daily Veil</small>
          </div>
        </div>
        <div className="jar-base" />
      </div>
      <div className="jar-shadow" />
    </div>
  )
}
