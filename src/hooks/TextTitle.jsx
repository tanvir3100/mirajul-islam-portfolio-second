/* eslint-disable react/prop-types */


const TextTitle = ({ header }) => {
    return (
        <div className="pt-6">
            <h1 className="text-center text-2xl lg:text-4xl text-white font-bold">{header}</h1>
        </div>
    );
};

export default TextTitle;