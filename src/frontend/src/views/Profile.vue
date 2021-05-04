<template>
  <div>
    <search-bar></search-bar>
    <div
      class="container mt-5 d-flex bg-light shadow-lg justify-content-center"
    >
      <h1>Profile</h1>
    </div>
    <div class="container mt-5 d-flex justify-content-center">
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-75 shadow rounded p-5 bg-light"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-column flex-sm-column flex-xs-column"
            >
              <div class="col-7 col-lg-7 col-md-7 col-sm-10 col-xs-10">
                <p>
                  lorem ipsum dolor sit am Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Aliquam facilis maxime id Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
                  aspernatur veritatis eius, fugit temporibus nobis hic
                  voluptate ullam, harum tempore reiciendis maxime dolores autem
                  ratione odit unde, exercitationem id minima.
                </p>
              </div>
              <div
                class="col-4 border border-dark d-flex flex-column justify-content-between"
                style="min-height: 200px"
              >
                <div>pdf</div>
                <div><i class="fas fa-download"></i></div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-column flex-sm-column flex-xs-column"
            >
              <div class="col-7 col-lg-7 col-md-7 col-sm-10 col-xs-10">
                <p>
                  lorem ipsum dolor sit am Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Aliquam facilis maxime id Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
                  aspernatur veritatis eius, fugit temporibus nobis hic
                  voluptate ullam, harum tempore reiciendis maxime dolores autem
                  ratione odit unde, exercitationem id minima.
                </p>
              </div>
              <div
                class="col-4 border border-dark d-flex flex-column justify-content-between"
                style="min-height: 200px"
              >
                <div>pdf</div>
                <div><i class="fas fa-download"></i></div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-column flex-sm-column flex-xs-column"
            >
              <div class="col-7 col-lg-7 col-md-7 col-sm-10 col-xs-10">
                <p>
                  lorem ipsum dolor sit am Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Aliquam facilis maxime id Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
                  aspernatur veritatis eius, fugit temporibus nobis hic
                  voluptate ullam, harum tempore reiciendis maxime dolores autem
                  ratione odit unde, exercitationem id minima.
                </p>
              </div>
              <div
                class="col-4 border border-dark d-flex flex-column justify-content-between"
                style="min-height: 200px"
              >
                <div>pdf</div>
                <div><i class="fas fa-download"></i></div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon p-2 bg-success"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon p-2 bg-success"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="container mt-5 d-flex justify-content-center">
      <publication-form></publication-form>
    </div>
    <div class="container mt-5 d-flex justify-content-center">
      <publication-component></publication-component>
    </div>
  </div>
</template>

<script>
import searchBar from "../components/SearchBar";
import logo from "../../public/img/logo vectorial.svg";
import publicationComponent from "../components/Publications";
import publicationForm from "../components/PublicationForm";

export default {
  components: {
    searchBar,
    publicationComponent,
    publicationForm,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style>
#logo {
  width: 0vw;
}
</style>