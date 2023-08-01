import { useState } from "react";

const CardProfile = ({ dataImage, setImgSpesifik }) => {
  const { universal, spesifik } = dataImage;

  const handleCardProfile = () => {
    window.my_modal_3.showModal();
    setImgSpesifik(spesifik)
  };

  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <figure>
          <img src={universal} alt="Gambar Profile Harjono" />
        </figure>

        <div className="card-body">
          <div className="card-actions flex justify-end">
            <button
              className="btn btn-primary"
              onClick={handleCardProfile}
            >
              Detail
            </button>
          </div>
        </div>
      </div>

      {/* You can open the modal using ID.showModal() method */}
    </>
  );
};

export default CardProfile;
