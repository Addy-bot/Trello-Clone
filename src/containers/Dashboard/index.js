import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { Projects } from '../../utils/MockData/ProjectsDummyJSON'
import ReactPaginate from 'react-paginate';
import './css/style.css';
import Items from './Items'

const Dashboard = ({ itemsPerPage = 3 }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (isEmpty(localStorage.getItem('userData'))) {
            navigateTo('/');
        }
    }, [])

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Projects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Projects.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Projects.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    activeClassName={"active"}
                    pageClassName={"page-item"}
                    disabledClassName={"disabled"}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous"}
                    nextLinkClassName={"previous"}
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}

                />
            </>
        </div>
    )
}

export default Dashboard
