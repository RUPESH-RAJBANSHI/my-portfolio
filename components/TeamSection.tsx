"use client";

import Image from "next/image";

type TeamMember = {
  name: string;
  position: string;
  department: "Development" | "Design";
  role: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Rupesh Rajbanshi",
    position: "Member",
    department: "Development",
    role: "Full Stack Developer",
    image: "/images/team/member-1.jpg",
    social: {
      github: "https://github.com/rupeshrajbanshi",
      facebook: "https://www.facebook.com/rupesh.razbnc.7",
      instagram: "https://www.instagram.com/rupesh_rajbanshi",
    },
  },
  {
    name: "Sandesh Laksamba",
    position: "Member",
    department: "Development",
    role: "Full Stack Developer",
    image: "/images/team/member-2.jpg",
    social: {
      github: "https://github.com/sandeshlaksamba",
      facebook: "https://www.facebook.com/sandesh.laksamba.limbu",
      instagram: "https://www.instagram.com/sandesh_laksamba",
    },
  },
  {
    name: "Saurav Roy",
    position: "Member",
    department: "Design",
    role: "Full Stack Developer",
    image: "/images/team/member-3.jpg",
    social: {
      github: "https://github.com/eyeblech",
      facebook: "https://www.facebook.com/0x131a4fb",
      instagram: "https://www.instagram.com/roy.saurv",
    },
  },
  {
    name: "Ganesh Khawas",
    position: "Member",
    department: "Design",
    role: "UI/UX Designer, Manager",
    image: "/images/team/member-4.jpg",
    social: {
      facebook: "https://www.facebook.com/bilgreat.sen",
      instagram: "https://www.instagram.com/bilgreat_sen_khawas",
    },
  },
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.5h4.45V21H2.75V9.5ZM9.25 9.5h4.27v1.57h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.95 5.32 6.78V21h-4.45v-4.83c0-1.15-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56V21H9.25V9.5Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.24-1.46 1.49-1.46h1.79V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.48V10H7.06v3H9.8v8h3.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Our Team
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Meet Our Team Members
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        A passionate team working together to build meaningful digital solutions
        through development and design.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-transparent transition duration-300 hover:border-indigo-500"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-indigo-400">
                {member.position}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                  {member.department}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                  {member.role}
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                  >
                    <GithubIcon />
                  </a>
                )}

                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                  >
                    <LinkedinIcon />
                  </a>
                )}

                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Facebook`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                  >
                    <FacebookIcon />
                  </a>
                )}

                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                  >
                    <InstagramIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
