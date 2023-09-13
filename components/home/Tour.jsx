
export default function Tour({ title, schedule, content, price, moreInfo, images, activeTour }) {
  return (
    <div className={activeTour ? '' : 'hidden'}>
      <div className="tour leading-tight">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <div className="tour-div">
          <p className="tour-schedule">{schedule}</p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <br />
          <p className="price" dangerouslySetInnerHTML={{ __html: price }} />
          <br />
          <p className="tour-schedule-aclarations" dangerouslySetInnerHTML={{ __html: moreInfo }} />

          <div className="tour-galery">
            {images?.slice(1)?.map((img, index) => (
              <div className="tour-img" key={img}>
                <img width={375} height={243} src={img} alt={`foto ${index}`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}