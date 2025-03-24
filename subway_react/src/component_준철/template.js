import React from 'react';


const Template = ({ className, imgsrc, title, desc }) => {
    return(
        <figure className={className}>
            <img src={imgsrc} alt="" />
            <figcaption>
              <div className="title">
                <h3>
                  {title}
                </h3>
              </div>
              <div className="desc">
                <p>
                  {desc}
                </p>
              </div>
            </figcaption>
          </figure>
    );
}

export default Template