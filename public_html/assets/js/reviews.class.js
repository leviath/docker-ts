class Reviews {
    constructor() {
        this.API_URL = '../api/';
        this.output = document.getElementById('reviews-output');
        this.output.innerText = 'Loading... ';

        this.getReviewsResponseData()
    }

    getReviewsResponseData() {
        return fetch(this.API_URL + 'reviews.json')
            .then(response => {
                if (!response.ok) {
                    throw Error("Unsuccessful response");
                }

                return response.json().then(data => {
                    this.output.innerHTML = this.getReviewsData(data);
                });
            })
            .catch(error => {
                console.warn(error);
                this.output.innerText = "Opps.. something went wrong";
            });
    }

    getReviewsData(reviewsData) {
        return reviewsData.response.data.shop.reviews
            .slice()
            .map(reviews => this.getReviewsTemplate(reviews))
            .join('');
    }

    getReviewsTemplate(reviews) {
        const template = `<div class="row">MarkDescription: ${reviews.markDescription}<br>
 Comment: ${reviews.comment}<br>
 CreationDate: ${Reviews.transformDate(reviews.creationDate)}</div>`;

        return template;
    }

    toggleBackgroundClass() {
        this.output.classList.toggle('fancy-bg');
    }

    refresh() {
        this.output.innerText = 'Loading... ';
        this.getReviewsResponseData();
    }

    static transformDate(reviewDate) {
        reviewDate = new Date(reviewDate);
        let day = reviewDate.getDate();
        let month = reviewDate.getMonth() + 1;
        let year = reviewDate.getFullYear();

        return `${day}.${month}.${year}`;
    }
}

reviews = new Reviews;
