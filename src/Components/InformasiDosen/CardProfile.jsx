
import GambarHarjono from "./../../Assets/informasi/dosen/harjono/harjono-universal-information.jpg"

const CardProfile = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={GambarHarjono} alt="Gambar Profile Harjono" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Harjono</h2>
        <p>Ketua Program Studi Manajemen Informatika</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardProfile