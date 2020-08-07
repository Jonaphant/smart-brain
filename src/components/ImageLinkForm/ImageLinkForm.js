import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='br3 shadow-5 center form'>
                    <input className='f4 pa2 w-70 center br2 br--left bt bb bl b--near-black bw1' id='detectInput' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple br2 br--right bt bb br b--near-black bw1' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;