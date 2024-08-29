import React from "react";

const RecommendedJobs = () => {
  const Categories = ({ image, title, opening }) => {
    return (
      <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
        <span className="flex items-center gap-x-4">
          <img src={image} alt={title} /> <p>{title}</p>
        </span>
        <p>{opening} Opening</p>
      </div>
    );
  };
  return (
    <div>
      <div>
        <div>
          <h2>Recommended Jobs</h2>
          <span>
            <button>Latest Jobs</button>
            <button>Premium Jobs</button>
          </span>
        </div>
        <p>
          Explore some of the best jobs from around the world from our wide
          selection of industries.
        </p>
        <div>
          <div>
            <div>
              <h2>Job Categories</h2>
            </div>
            <div>
                <Categories image="/images/it.png" title="Information Technology" opening="1200" />
                <Categories image="/images/finance.png" title="Finance" opening="1200" />
                <Categories image="/images/healthcare.png" title="Healthcare" opening="1200" />
                <Categories image="/images/education.png" title="Education" opening="1200" />
                <Categories image="/images/marketing.png" title="Marketing" opening="1200" />
                <Categories image="/images/retail.png" title="Retail" opening="1200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedJobs;
