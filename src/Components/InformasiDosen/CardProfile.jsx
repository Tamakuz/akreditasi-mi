const CardProfile = ({ dataImage }) => {
  const { universal, spesifik } = dataImage

  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <figure>
          <img src={universal} alt="Gambar Profile Harjono" />
        </figure>

        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => window.my_modal_3.showModal()}
            >
              open modal
            </button>
          </div>
        </div>
      </div>

      {/* You can open the modal using ID.showModal() method */}
    </>
  );
};

export default CardProfile;
