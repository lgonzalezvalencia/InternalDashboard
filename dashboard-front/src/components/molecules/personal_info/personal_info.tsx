import "./personal_info.css";

interface PersonalInfoEditProps {
  closeModal: () => void;
}

function Personal_Info_Edit({ closeModal }: PersonalInfoEditProps) {
  return (
    <div className="personal__info__edit">
      <div className="personal__info__edit__header">
        <h1>Edit Prospect Information</h1>
        <button className="closePersonalInfoModal" onClick={closeModal}>
          X
        </button>
      </div>
      <form action="" method="post" className="personal__info__edit__form">
        <label htmlFor="phone_num">Phone: </label>
        <input
          type="tel"
          name="Phone"
          id="phone_num"
          className="personal__info__edit__form__input"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="Email"
          id="email"
          className="personal__info__edit__form__input"
        />
        <label htmlFor="resume_file">Resume: </label>
        <div className="file__upload">
          <input
            type="file"
            name="Resume"
            id="resume_file"
            className="file__input"
          />
          <div className="file__upload__message">
            Drag and drop a file to upload or
            <a href="#" className="file__upload__link">
              {" "}
              Select a file from your computer{" "}
            </a>
          </div>
          Please ensure the resume is a Word or PDF file up to 2MB size
        </div>
        <div className="personal__info__submit">
          <input
            type="submit"
            value="Save"
            id="personal_info"
            className="personal__info__submit__button save__button"
          />
          <input
            type="button"
            value="Cancel"
            className="personal__info__submit__button"
          />
        </div>
      </form>
    </div>
  );
}

export { Personal_Info_Edit };
