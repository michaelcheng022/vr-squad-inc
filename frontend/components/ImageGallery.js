import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';


class ImageGallery extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    // onSelectImage = (index, image)  => {
    //     var images = this.state.images.slice();
    //     var img = images[index];
    //     if(img.hasOwnProperty("isSelected"))
    //         img.isSelected = !img.isSelected;
    //     else
    //         img.isSelected = true;

    //     this.setState({
    //         images: images
    //     });
    // }
    formatImages = (images) => {
      const formatted = images.map((img) => {
        let image = {
          src: img,
          thumbnail: img,
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        }
        return image;
      })
      return formatted;
    }
    render () {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                minWidth: "280px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "hidden"}}>
            <Gallery
              images={this.formatImages(this.state.images)}
              enableImageSelection={false}
              enableLightBox={false}
            />
            </div>
        );
    }
}

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             srcset: PropTypes.array,
//             caption: PropTypes.string,
//             thumbnailWidth: PropTypes.number.isRequired,
//             thumbnailHeight: PropTypes.number.isRequired,
//             isSelected: PropTypes.bool
//         })
//     ).isRequired
// };



export default ImageGallery; 