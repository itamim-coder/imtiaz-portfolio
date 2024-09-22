import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "@/components/Footer";
import NavBarDetailsPage from "@/components/Custom/NavDetailsPage";
import { projectsData } from "@/lib/data";
import { useParams } from "next/navigation";

const ProjectDetailsPage = () => {
  const params = useParams();
  const projectId = parseInt(params?.id);
  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const descriptionLines = project.description.split("●").filter(Boolean);

  // Determine layout based on project tag
  const isAndroidProject = project.tag.includes("Android");
  const gridCols = isAndroidProject
    ? "grid-cols-6" // For Android projects, display 6 cards per row
    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"; // For Web projects, display 3 cards per row

  return (
    <>
      <NavBarDetailsPage />

      <div className="py-12 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4">{project.about}</p>

        {/* Conditionally render based on project tag */}
        <div className={`grid ${gridCols} gap-4`}>
          {project.thumbnail?.map((image, index) => (
            <div key={index} className="w-full">
              <Zoom>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className={`w-full h-auto object-cover rounded-lg ${
                    isAndroidProject ? "h-112" : "h-48"
                  }`} // Different image height for Android and Web
                />
              </Zoom>
            </div>
          ))}
        </div>

        {/* Conditionally render buttons only if URLs are provided */}
        <div className="flex space-x-6 justify-center items-center my-4">
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 rounded-lg border-white p-2 font-semibold hover:underline"
            >
              Preview
            </a>
          )}

          {project.clientSideCode && (
            <a
              href={project.clientSideCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 rounded-lg border-white p-2 font-semibold hover:underline"
            >
              Client Side Code
            </a>
          )}

          {project.backendCode && (
            <a
              href={project.backendCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 rounded-lg border-white p-2 font-semibold hover:underline"
            >
              Backend Code
            </a>
          )}
        </div>

        <h2 className="text-lg font-bold my-2">Technologies Used:</h2>
        <ul className="my-4">
          {project.technology.map((tech, index) => (
            <li
              key={index}
              className="inline-block mr-3 bg-gray-200 text-black rounded-lg p-2"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <h2 className="text-lg font-bold my-2">Details:</h2>
          {descriptionLines.map((line, index) => (
            <p key={index} className="mb-2">
              ● {line.trim()}
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
