
export default function Tour({ title, schedule, content, price, moreInfo, images }) {
  return (
    <div id="template-1">
      <div className="tour">
        <h2>{title}</h2>

        <div className="tour-div">
          <p className="tour-schedule">{schedule}</p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <br /><br />
          <p className="price" dangerouslySetInnerHTML={{ __html: price }} />
          <br /><br />
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