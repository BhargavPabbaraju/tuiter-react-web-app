import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10 position-relative">
                    <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                    <i class="fas fa-search position-absolute text-dark wd-search-tuiter"></i>
                </div>
                <div class="col-2">
                    <i class="fas fa-cog fa-2x text-primary" ></i>
                </div>
            </div>


            <ul class="nav nav-tabs mt-2 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../../images/starship.webp" width="100%"/>
                <h2 class="position-absolute bottom-0 left-0 text-white ps-2">SpaceX's Starship</h2>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

