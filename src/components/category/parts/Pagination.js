import React from 'react';
import arrowGray from "../../../assets/img/arrow-btn-link-left.svg";


export default class Pagination extends React.Component {
    
    changePage(page) {
        this.props.setCurrentPage(page);
    }
    
    render() {
        const { currentPage, totalPagesNum } = this.props;
        
        return (
            <div className="pagination-wrapper pt-5">
                <button type="button" className="btn prev" disabled={currentPage.toString() === '1'} onClick={this.props.prevPage}>
                    <img src={ arrowGray } alt="" />
                </button>
                {
                    Array.apply(null, { length: totalPagesNum }).map((e, i=1) => {
                        if (currentPage-1 === i) {
                            return <button key={i} className="btn page-number active" onClick={() => this.changePage(i+1)}>{i+1}</button>
                        // } else if (totalPagesNum > 5 && currentPage - 4 < i && currentPage + 2 > i) {
                        } else if (Math.abs(currentPage - i - 1 ) < 3 + Math.max(0,3-currentPage) + Math.max(0,currentPage-totalPagesNum+2)) {
                            // console.log(i+'a')
                            return <button key={i} className="btn page-number" onClick={() => this.changePage(i+1)}>{i+1}</button>
                        } else {
                            return false
                        }
                    })
                }
                <button type="button" className="btn next" disabled={currentPage.toString() === totalPagesNum.toString()} onClick={this.props.nextPage}>
                    <img src={ arrowGray } alt="" />
                </button>
            </div>
        )
    }
}