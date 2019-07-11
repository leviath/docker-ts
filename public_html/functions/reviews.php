<?php
include('get-reviews-api-url.php');

$reviewUrl = get_reviews_api_url();
$data = json_decode(file_get_contents($reviewUrl));
$shopReviews = $data->response->data->shop->reviews;

$orderedShopReviews = array($shopReviews);
usort($orderedShopReviews[0], 'sortReviews');

function sortReviews($a, $b) {
    $reviewsIndex = 0;
    if ($a->mark > $b->mark) {
        $reviewsIndex = 1;
    } else if ($a->mark < $b->mark) {
        $reviewsIndex = -1;
    }
    return $reviewsIndex;
}
