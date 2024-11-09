import { FaDiscord, FaInstagram, FaTwitch } from "react-icons/fa";
import "./socialList.scss";
import { BsShop } from "react-icons/bs";
import { RiBlueskyFill } from "react-icons/ri";
import { CgYoutube } from "react-icons/cg";
export default function SocialList() {
  return (
    <div className="social-list">
      <div className="socials-list">
        <a
          href="https://discord.com/invite/vfleet"
          target="_blank"
          className="btn btn-social"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.twitch.tv/team/vfleet"
          target="_blank"
          className="btn btn-social"
        >
          <FaTwitch />
        </a>
        <a
          href="https://merch.kawaentertainment.com/collections/vfleet-project"
          target="_blank"
          className="btn btn-social"
        >
          <BsShop />
        </a>
        <a
          href="https://bsky.app/profile/vfleetproject.bsky.social"
          target="_blank"
          className="btn btn-social"
        >
          <RiBlueskyFill />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGluKlwB6l8OYosgQgPNncA"
          target="_blank"
          className="btn btn-social"
        >
          <CgYoutube />
        </a>
        <a
          href="https://www.instagram.com/vfleetproject"
          target="_blank"
          className="btn btn-social"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
