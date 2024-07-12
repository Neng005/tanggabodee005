import Image from "next/image";
import Slider1 from '@/public/max1.jpg'
import Slider2 from '@/public/max2.jpg'
export default function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={Slider1}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
        <div className="carousel-item">
          <Image
            src={Slider2}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="card-group mt-3 mx-3 mb-2" >
      
  <div className="card me-3 "  style={{ height: '450px', objectFit: 'cover', overflow: 'hidden', borderRadius: '15px' }} >
    <img src="https://distantjob.com/wp-content/uploads/2024/02/Visual-Studio-vs-Visual-Studio-Code.png" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card me-3 rounded-3" style={{ height: '450px', objectFit: 'cover' , overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://cdn.educba.com/academy/wp-content/uploads/2023/08/Visual-Studio-Code.jpg" className="card-img-top h-100" alt="..." />
   
  </div>
  <div className="card me-3" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://miro.medium.com/v2/resize:fit:1358/1*N8oO5GmtapVytY6gDEOT2w.png" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://i0.wp.com/gluonhq.com/wp-content/uploads/2020/11/github_actions_gluon_diagram.png?ssl=1" className="card-img-top h-100" alt="..." />
  </div>
</div>
    </>
  );
}

