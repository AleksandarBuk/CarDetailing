const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    // Updated text colors to grayscale with a hint of blue for accents
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-300 xs:leading-[76.8px] leading-[66.8px]",
    paragraph: "font-poppins font-normal text-gray-400 text-[20px] leading-[30.8px]",
    heading3: "font-poppins font-semibold italic xs:text-[48px] text-[32px] text-blue-200 xs:leading-[your_choice]",

    // Keeping layout and spacing styles unchanged for now
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    padding_p_am: "sm:px-8 sm:py-3",

    // Additional styles for paragraphs to enhance readability
    paragraphMargin: {
        margin: '20px',
    },
    paragraphPadding: {
        padding: '10px',
    },

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    fadeInScaleUp: "animation-class-names-here",

    // Updated background gradients to include subtle blue
    navBackground: "px-6 py-4 flex justify-center bg-gradient-to-r from-gray-700 to-blue-900",
    albumDetailBackground: "from-gray-700 to-blue-900 bg-gradient-to-r",
    aboutMeBackground: "from-gray-800 to-blue-800 bg-gradient-to-r",
    mainContentBackground: "flex justify-center items-start bg-gradient-to-r from-gray-900 to-blue-900",

    albumDetailContainer: "bg-gradient-to-r from-gray-900 to-blue-900 flex flex-col items-center justify-center",
    mainImageContainer: "w-full max-w-[900px] max-h-[1000px] overflow-hidden",
    mainImage: "max-w-full max-h-full object-contain",
    thumbnailContainer: "flex overflow-x-auto py-2.5 max-w-90vw",
    thumbnailImage: "w-[150px] h-[75px] cursor-pointer",
    arrowButton: "text-2xl text-white p-2 cursor-pointer select-none",
    selfieContainer: "flex justify-center items-center w-full",
    selfieStyle: "w-full max-w-[800px] h-auto border-4 border-solid border-gray-400 rounded-full",
};

export const sloganStyle = {
    slogan: "text-3xl font-bold text-blue-500 underline decoration-wavy decoration-blue-500",
};

export const ctaButton = {
    padding: '10px 20px',
    backgroundColor: '#0000FF', // A classic blue for call-to-action buttons
    color: 'white',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '20px',
};

export const modalOverlay = 'fixed inset-0 bg-black bg-opacity-50 z-50';
export const modalContainer = 'bg-white rounded-lg shadow-lg max-w-sm mx-auto';

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    albumMainImage: `flex-1 ${styles.flexCenter} ${styles.mainImageContainer}`,
    albumThumbnails: `flex-1 ${styles.flexCenter} ${styles.thumbnailContainer}`,
};

export default styles;
