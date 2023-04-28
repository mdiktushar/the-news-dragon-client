import React from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;

  return (
    <>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p>{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 205)}....{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              readonly
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewsCart;
