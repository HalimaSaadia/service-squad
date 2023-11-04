

const SectionHeading = ({text}) => {
  
    const headingStyle= {
        backgroundImage:"linear-gradient(to bottom, #2B4D7A , #3F77B3, #73D5E2, #81E68A, #3F77B3 )",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }
    return (
        <div className="py-10">
            <h1 className="textPrimary text-center text-5xl font-bold ">{text}</h1>
        </div>
    );
};

export default SectionHeading;