import React from 'react'

const Rating = ({rating, count, color}) => {
    return (
        <div>
            <span>
                <i style={{color}} className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
            </span>
            <span>
                <i style={{color}} className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
            </span>
            <span>
                <i style={{color}} className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
            </span>
            <span>
                <i style={{color}} className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
            </span>
            <span>
                <i style={{color}} className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
            </span>
            <span> {rating && rating}</span>
            <span className='mx-3'>{count}条评论</span>
        </div>
    )
}

Rating.defaultProps = {
    color: "red"
}

export default Rating
