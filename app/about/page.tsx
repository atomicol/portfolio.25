import { Metadata } from "next";
import personalInfo from "@/data/personal-info.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About - Keven Hernandez",
  description: "Learn more about Keven Hernandez's experience and skills.",
};

export default function AboutPage() {
  const { personal, experience, skills, achievements } = personalInfo;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>
        <div className="space-y-2 text-sm leading-relaxed text-foreground/80 md:text-base">
          <p>
            I&apos;m a software engineer located in the US 🇺🇸. I enjoy working
            with scalable systems and involving math whenever I can in my
            projects.
          </p>
          <p>
            My Army aviation training shaped my problem-solving approach and
            taught me systematic troubleshooting and a great deal about
            electricity. I also get to fly on helicopters a couple times a year.
          </p>
          <p>
            Outside of work, I stay active with soccer and calisthenics
            training.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="relative mb-3 inline-block pb-2 text-2xl font-bold tracking-tight after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-2/3 after:bg-primary md:text-3xl">
          Experience
        </h2>
        <div className="space-y-3">
          {experience.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">
                      {exp.position}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                      {"location" in exp && exp.location
                        ? ` • ${exp.location}`
                        : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                    {exp.current && (
                      <span className="inline-block mt-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Current
                      </span>
                    )}
                    {exp.partTime && (
                      <span className="inline-block mt-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        Part-time
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent px-2 py-1 rounded-md text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="relative mb-3 inline-block pb-2 text-2xl font-bold tracking-tight after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-2/3 after:bg-primary md:text-3xl">
          Skills
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="space-y-3">
                  {skills.languages.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= skill.level ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Web Technologies</h3>
                <div className="space-y-3">
                  {skills.web.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= skill.level ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Databases</h3>
                <div className="space-y-3">
                  {skills.databases.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= skill.level ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Tools & Concepts</h3>
                <div className="space-y-3">
                  {[...skills.tools, ...skills.concepts].map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= skill.level ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section className="mb-8">
        <h2 className="relative mb-3 inline-block pb-2 text-2xl font-bold tracking-tight after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-2/3 after:bg-primary md:text-3xl">
          Achievements
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Technical", items: achievements.technical },
            { title: "Military", items: achievements.military },
          ].map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="text-base font-semibold uppercase tracking-wider">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-4">
                  {category.items.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
