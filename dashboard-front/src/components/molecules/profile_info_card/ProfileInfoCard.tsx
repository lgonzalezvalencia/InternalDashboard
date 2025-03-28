import "./ProfileInfoCard.css";
import InfoViewHeader from "../../atoms/info_view_header/InfoViewHeader";
import { useRef } from "react";

interface Prospect {
  name: string;
  lastName: string;
  seniority: string;
  jobTitle: string;
  status: string;
  capabilities: { capability: string }[];
  subcapabilities: { capability: string }[];
}

function ProfileInfoCard({
  name,
  lastName,
  seniority,
  jobTitle,
  status,
  capabilities,
  subcapabilities,
}: Prospect) {
  const colors: string[] = ["red", "blue", "green", "yellow", "purple"];
  const setColor = (text: string): string => {
    console.log(text);
    const index = Math.floor(Math.random() * (4 - 0 + 1));
    console.log(index);
    return colors[index];
  };

  const profileModal = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!profileModal.current) {
      return;
    }
    profileModal.current.hasAttribute("open")
      ? profileModal.current.close()
      : profileModal.current.showModal();
  }

  return (
    <>
      <div className="profile__info__card">
        <InfoViewHeader
          title="Profile Information"
          handleClick={toggleDialog}
          dialogRef={profileModal}
        />
        <div className="profile__info__card__content">
          <p>
            {name} {lastName}
          </p>
          <div className="profile__info__card__jobTitle">
            <p>{seniority}</p>
            <p>{jobTitle}</p>
          </div>
          <div className="profile__info__card__status">
            <p>Status: </p>
            <p className={"profile__info__card__status__" + status}>{status}</p>
          </div>
          <p>Main Capabillities</p>
          <div className="personal__info__card__capabilities">
            {capabilities.map((capability) => (
              <p className={"profile__info__card__color__" + setColor(status)}>
                {capability.capability}
              </p>
            ))}
          </div>
          <p>Subcapabillity</p>
          <div className="personal__info__card__subcapabilities">
            {subcapabilities.map((capability) => (
              <p className={"profile__info__card__color__" + setColor(status)}>
                {capability.capability}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfoCard;
