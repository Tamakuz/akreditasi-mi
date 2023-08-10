import { useState } from "react";

const CardProfile = ({ dataImage, setImgSpesifik }) => {
  const { universal, spesifik } = dataImage;

  const handleCardProfile = () => {
    window.my_modal_3.showModal();
    setImgSpesifik(spesifik)
  };

  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl fle flex-col justify-between">
        <figure>
          <img src={universal} alt="Gambar" />
        </figure>

        <div className="card-bod">
          <div className="card-actions flex justify-end m-4">
            <button
              className="btn btn-primary"
              onClick={handleCardProfile}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfile;
