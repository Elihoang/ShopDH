'use client'

import React from "react";
import Heading from "./Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import Avatar from "@/app/components/products/Avt";


interface ListRatingProps {
    product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    return (
        <div>
            <Heading title="product review"  />
          
            <div className="text-sm mt-2">
                {product.reviews && 
                 product.reviews.map((review: any) => {
                    return (
                        <div key={review.id} className="max-w-[300px]">
                             <hr className="mt-4 mb-4"></hr>
                           
                            <Avatar src={review?.user.image} />
                            <div className="font-semibold">
                               {review?.user.name}
                            </div>
                            <div className="font-light">{moment(review.createDate).fromNow()}
                            </div>
                       
                            <div className="mt-2">
                                <Rating value={review.rating} readOnly/>
                          
                            <div className="mt-2">
                                {review.comment}
                                </div>
                                <hr className="mt-4 mb-4"></hr>
                            </div>
                        </div>
                       
                    );
                })}
            </div>
        </div>
    );
}

export default ListRating;
