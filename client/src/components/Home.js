import React from "react";

const Home = (props) => {
  let cnt = 0;
  return (
    <div className="container ">
      <div className="accordion my-4" id="accordionExample">
        {/* { console.log(props.records)} */}
        {
          <div className="forRecords showDataStyle">
            {(props.records.length === 0 && "Add Subjects") ||
              props.records.map((curEle) => {
                let percent = (curEle.attended / curEle.held) * 100;
                let cri = curEle.criteria;
                return (
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${++cnt}`}>
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne`}
                        aria-expanded="false"
                        aria-controls={`collapseOne`}
                      >
                        {curEle.subject}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body1 d-flex justify-content-between">
                        <div className="mx-3 my-2">
                          <b> No of classes held:</b>
                          {curEle.held} <br />
                          <b>No of classes attended:</b>
                          {curEle.attended} <br />
                          <b>Total No of classes:</b>
                          {curEle.totalClasses} <br />
                            <br />
                          {
                              percent >= cri? "You're on track!" : `You need to attend ${Math.ceil(((0.75 * curEle.held) - curEle.attended) / 0.25)} classes more!`
                          }
                        </div>

                        <div className="shower mx-4">
                          <h2>{(curEle.attended / curEle.held) * 100}%</h2>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                );
              })}
          </div>
        }
      </div>
    </div>
  );
};
export default Home;
