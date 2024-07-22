/* eslint-disable react/prop-types */
import RepertoireList from "./RepertoireList";
import { useSelector } from "react-redux";

const RepertoireGroup = ({ page }) => {
    const initialRep = [...useSelector(state => state.repertoire)]
    //console.log(initialRep)
    const artistSortedRep = [...useSelector(state => state.repertoire)].sort((a, b) => a.artist.localeCompare(b.artist))
    const titleSortedRep = [...useSelector(state => state.repertoire)].sort((a, b) => (b.title.localeCompare("a")>=0) - (a.title.localeCompare("a")>=0) || a.title.localeCompare(b.title))
    const voicingSortedRep = [...useSelector(state => state.repertoire)].sort((a, b) => a.voicing.localeCompare(b.voicing))
    const publisherSortedRep = [...useSelector(state => state.repertoire)].sort((a, b) => a.publisher.localeCompare(b.publisher))
    
    return(
        <div>
            {page === 'default' && (
                <RepertoireList repertoire={initialRep} />
            )}
            {page === 'artist' && (
                <RepertoireList repertoire={artistSortedRep} />
            )}
            {page === 'publisher' && (
                <RepertoireList repertoire={publisherSortedRep} />
            )}
            {page === 'voicing' && (
                <RepertoireList repertoire={voicingSortedRep} />
            )}
            {page === 'title' && (
                <RepertoireList repertoire={titleSortedRep} />
            )}
        </div>
    )
}

export default RepertoireGroup