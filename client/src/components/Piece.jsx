/* eslint-disable react/prop-types */
const Piece = ({ piece }) => {
    return (
      <li>{piece.title} by {piece.artist}</li>
    )
}

export default Piece