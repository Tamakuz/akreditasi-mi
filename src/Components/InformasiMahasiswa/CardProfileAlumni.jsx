const CardProfileAlumni = ({ dataImage }) => {
  const { universal, spesifik } = dataImage;

  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <figure>
          <img src={universal} className="w-[258px]" alt="Gambar" />
        </figure>

        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => window.my_modal_3.showModal()}
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

export default CardProfileAlumni;