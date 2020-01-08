import React, { Component } from 'react';
import Header from '../Header';
import './styles.css';
import { connect } from 'react-redux';
import { imagesLoad } from '../../redux/actions';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.imagesLoad(key, this.props.images.page);
    }

    fetchImages() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });
    }

    loadMore = () => {
        console.log('Load More');
        this.props.imagesLoad(key, this.props.images.page);
    };

    render() {
        console.log(this.props.images.images);
        const { images } = this.props.images;
        // console.log(images);
        return (
            <div>
                <Header />
                <div className="content">
                    <section className="grid">
                        {images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.urls.regular}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                        <button onClick={this.loadMore}>Load More</button>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        images: state.grid,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        imagesLoad: (...params) => dispatch(imagesLoad(...params)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    // {imagesLoad }
)(ImageGrid);
