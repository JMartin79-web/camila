import foto1 from "../assets/fotos/tour1/tour1_v2.jpg"
import foto2 from "../assets/fotos/tour1/Dribbble_shot-2tour1.png"
import foto3 from "../assets/fotos/tour1/Dribbble_shot-3tour1.png"
import foto4 from "../assets/fotos/tour1/foto4.jpeg"
import Image from "next/image"

export default function Tour() {
  return (
    <div id="template-1">
        <div class="tour">
            <h2>Tour #1: Wineries and Olive growers</h2>
            {/* <!-- <p class="tour-btn" >See more</p> --> */}
            <div class="tour-div">
                <p class="tour-schedule">Schedule: 9:30 am to 17:00 pm</p>
                <br/>
                  <p>
                    On this tour, we will spend the day touring the city's most characteristic wineries and olive groves.
                    <br/><br/>
                    Our careful selection includes wineries like La Rural, Bodeguer, López, Vistandes, Cecchin, and olive growers like Pasrai and Laur. We prioritize quality and experience. So you can be sure that you will enjoy this tour to the fullest.
                    <br/><br/>
                    We'll be visiting 2 of these wineries and 1 olive farm. Also we will make a stop to have lunch. At all points of the tour, you will enjoy tastings, historical explanations of the places, and beautiful views to relax and enjoy the day.
                    <br/><br/>
                    At the end of the tour, we ensure you arrive safely back at your hotel.
                  </p>
                    <br/><br/>
                    <p class="price">
                        100 USD per person
                        <br/>
                        (lunch included)
                    </p>

                    <br/><br/>
                    <p class="tour-schedule-aclarations">
                        * The price includes entrance fees to wineries and olive groves with their respective guided tours and tastings. It also includes lunch without drinks.
                        <br/>
                        * If there is no availability in any of the wineries or olive groves mentioned, we will choose another from our selection.
                        <br/>
                        *If you want to visit a specific winerie or olive farm, let us know so we can adapt the tour to your liking. (it is possible that due to the location of the places you choose, a surcharge may apply).
                    </p>
                <div class="tour-galery">
                    <div class="tour-img"><Image width={375} height={243} src={foto1} alt="foto 1"/></div>
                    <div class="tour-img"><Image width={375} height={243} src={foto2} alt="foto 2"/></div>
                    <div class="tour-img"><Image width={375} height={243} src={foto3} alt="foto 3"/></div>
                    <div class="tour-img"><Image width={375} height={243} src={foto4} alt="foto 4"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

 {/* <!-- TEMPLATES --> */}

//  <div id="template-2">
//  <div class="tour">
//      <h2>Tour #2: High Mountain</h2>
//      {/* <!-- <p class="tour-btn" >See more</p> --> */}
//      <div class="tour-div">
//          <p class="tour-schedule">Schedule: 7:00 am to 18:00 pm</p>
//          <br/>
//          <p>
//              After picking you up at your hotel, we will start our tour in direction of Aconcagua Park, a protected area in the Argentinean Andes on the border with Chile. There, you will see Mount Aconcagua, one of the highest in South America. You will enjoy spectacular views while trekking!
//              <br/><br/>
//              We continue with the visit to the Inca Bridge, which is declared a cultural heritage. Its geological, scenic, and historical value make up an important feature of the cultural identity of this region of the Central Andes.
//              <br/><br/>
//              After lunch, we will visit the Potrerillos Dam viewpoint, one of Mendoza's most beautiful and iconic views. There we will stop and you can go down to the dike and take photos if you wish.
//              <br/><br/>
//              After that we m,ake sure you arrive safely back to your hotel.
//          </p>
//          <br/><br/>
//          <p class="price">
//              150 USD one person  
//              <br/>
//              (includes lunch)
//          </p>

//          <br/><br/>
//          <p class="tour-schedule-aclarations">
//              * The price includes the entrance to the Aconcagua park and lunch without drinks.
//          </p>
         
         
//          <div class="tour-galery">
//              <div class="tour-img"><img src="./assets/fotos/tour2/Dribbble_shot-5tour2.png" alt=""/></div>
//              <div class="tour-img"><img src="./assets/fotos/tour2/Dribbble_shot-6tour2.png" alt=""/></div>
//              <div class="tour-img"><img src="./assets/fotos/tour2/Dribbble_shot-7tour2.jpg" alt=""/></div>
//              <div class="tour-img"><img src="./assets/fotos/tour2/Dribbble_shot-8tour2.png" alt=""/></div>
//          </div>
//      </div>
//  </div>
// </div>

// <div id="template-3">
//  <div class="tour">
//      <h2>Tour #3 Countryside day</h2>
//      {/* <!-- <p class="tour-btn" >See more</p> --> */}
//      <div class="tour-div">
//          <p class="tour-schedule">Schedule: 9:30 am to 17:00 pm</p>
//          <br/>
//          <p>
//              After picking you up at your hotel, we start the tour at a ranch in the middle of the road to La Carrera, where you will be welcomed by gauchos and taste traditional Argentinean food and wine in a 4-course menu.
//              <br/><br/>
//              Afterwards, you can enjoy a horseback ride in the mountains, or opt for a more leisurely activity, such as a traditional Argentinean cooking class.
//              <br/><br/>
//              We spend the day there and then we continue along the race road until we reach the viewpoint at the Potrerillos dam, where the Potrerillos water mirror is located. The majesty of this setting, added to the beauty of the natural landscape, the pure air, the climate and the mountain environment, results in great tourist and recreational potential at an international level.
//              <br/><br/>
//              At the end of the tour, we ensure you arrive safely back at your hotel.</p>
//              <br/><br/>
//              <p class="price">
//                  150 USD one person  
//                  <br/>
//                  (all included)
//              </p>
//              <div class="tour-galery">
//                  <div class="tour-img"><img src="./assets/fotos/tour3/la_alejandra_1.jpg" alt="foto 1"/></div>
//                  <div class="tour-img"><img src="./assets/fotos/tour3/Dribbble_shot-10tour2.png" alt="foto 2"/></div>
//                  <div class="tour-img"><img src="./assets/fotos/tour3/Dribbble_shot-11tour2.png" alt="foto 3"/></div>
//                  <div class="tour-img"><img src="./assets/fotos/tour3/Dribbble_shot-12tour2.png" alt="foto 4"/></div>
//              </div>
//      </div>
//  </div>
// </div>
