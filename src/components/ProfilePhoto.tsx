import { useEffect, useRef, useState } from "react";
import { Camera, Trash2, User } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const STORAGE_KEY = "portfolio-profile-photo";

type Props = {
  className?: string;
};

/** Circular profile photo with an easy upload (stored locally in the browser). */
export function ProfilePhoto({ className = "" }: Props) {
  const [photo, setPhoto] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setPhoto(saved || profile.photo || "");
  }, []);

  const handleFile = (file?: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      setPhoto(url);
      try {
        localStorage.setItem(STORAGE_KEY, url);
      } catch {
        /* image too large for local storage — still shown this session */
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="glass relative grid h-56 w-56 place-items-center overflow-hidden rounded-full sm:h-72 sm:w-72">
        {photo ? (
          <img src={photo} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <div className="text-muted-foreground p-6 text-center">
            <User size={44} className="mx-auto" />
            <p className="mt-2 text-xs">Upload your profile photo</p>
          </div>
        )}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="bg-primary text-primary-foreground absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Upload profile photo"
        >
          <Camera size={18} />
        </button>
      </div>

      {photo && (
        <button
          type="button"
          onClick={() => {
            setPhoto("");
            localStorage.removeItem(STORAGE_KEY);
          }}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-xs"
        >
          <Trash2 size={13} /> Remove photo
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}

export default ProfilePhoto;
