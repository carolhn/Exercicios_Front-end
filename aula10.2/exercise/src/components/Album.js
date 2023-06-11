import React from 'react';
import PropTypes from 'prop-types';

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section>
        <img src={ album.image } alt={ album.title } />
        <h2>{ album.title }</h2>
        <p>{ album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
        </p>
        <p>Gravadora: { album.others.recordCompany }</p>
        <p>Formatos: { album.others.formats }</p>
      </section>
    );
  }
}

Album.propTypes = {
  album: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.shape({
      year: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
    }).isRequired,
    others: PropTypes.shape({
      recordCompany: PropTypes.string.isRequired,
      formats: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;