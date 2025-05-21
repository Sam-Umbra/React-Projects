export default function Entry() {
    return(
    <article className="entry">
        <img src="https://cdn.britannica.com/03/75503-050-F65891FA/volcanic-cone-Japan-Mount-Fuji.jpg" alt="Mount Fuji" />
        <section>
            <div className="header">
                <span className="location">
                    <img src="/marker.png" alt="Location-Dot" />
                    Japan
                    <a href="">View on Google Maps</a>
                </span>
                <h2 className="title">Mount Fuji</h2>
            </div>
            <div className="content">
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    </article>
    )
};
