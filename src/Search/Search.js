import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search(){

    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

    return(
        <div>
            <NavBar/>
            <SearchResultsSummary/>
            <SearchResults/>
            <SearchResults businesses={businesses} />
        </div>
    );
}