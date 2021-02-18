import React from 'react';

function History() {
    return (
        <div>
            <h4 className="title">
                History
                <hr />
            </h4>
            <div className="history-card-positive">
                <div>
                    Cash
                </div>
                <div>
                    +500
                </div>
            </div>
            <div className="history-card-negative">
                <div>
                    Book
                </div>
                <div>
                    -40
                </div>
            </div>
            <div className="history-card-negative">
                <div>
                    Camera
                </div>
                <div>
                    -200
                </div>
            </div>
        </div>
    )
}

export default History;
