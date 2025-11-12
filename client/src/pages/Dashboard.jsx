import React, { useEffect, useState } from "react";
import {
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import api from "../configs/api.js";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token },
      });
      setAllResumes(data.resumes);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const createResume = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } }
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      const resumeId = data.resume?._id || data.resumeId;
      navigate(`/app/builder/${resumeId}`);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!resume) throw new Error("No file selected");

      const extractTextFromPdf = async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item) => item.str).join(" ") + "\n";
        }
        return text;
      };

      const resumeText = await extractTextFromPdf(resume);

      const { data } = await api.post(
        "/api/ai/upload-resume",
        { resumeText, title },
        { headers: { Authorization: token } }
      );

      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      const uploadedId = data.resume?._id || data.resumeId;
      navigate(`/app/builder/${uploadedId}`);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  const editTitle = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.put(
        "/api/resumes/update",
        { resumeId: editResumeId, resumeData: { title } },
        { headers: { Authorization: token } }
      );
      setAllResumes(
        allResumes.map((r) =>
          r._id === editResumeId ? { ...r, title } : r
        )
      );
      toast.success(data.message);
      setEditResumeId("");
      setTitle("");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    try {
      if (!window.confirm("Are you sure you want to delete this resume?"))
        return;
      await api.delete(`/api/resumes/delete/${resumeId}`, {
        headers: { Authorization: token },
      });
      setAllResumes(allResumes.filter((r) => r._id !== resumeId));
      toast.success("Deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full sm:w-48 h-44 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 bg-white border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-md transition-all"
          >
            <PlusIcon className="size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600">Create Resume</p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full sm:w-48 h-44 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 bg-white border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-md transition-all"
          >
            <UploadCloudIcon className="size-11 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-purple-600">Upload Existing</p>
          </button>
        </div>

        <hr className="border-slate-300 my-6" />

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <div
                key={resume._id}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className="relative flex flex-col items-center justify-center rounded-lg h-44 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}30)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 mb-1 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm text-center px-2 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p className="absolute bottom-1 text-[11px] text-slate-400 px-2">
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-1 right-1 hidden group-hover:flex gap-1"
                >
                  <TrashIcon
                    onClick={() => deleteResume(resume._id)}
                    className="size-7 p-1.5 hover:bg-white/60 rounded text-slate-700"
                  />
                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                    className="size-7 p-1.5 hover:bg-white/60 rounded text-slate-700"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Create Resume Modal */}
      {showCreateResume && (
        <Modal
          title="Create a Resume"
          onClose={() => setShowCreateResume(false)}
        >
          <form onSubmit={createResume}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600"
              required
            />
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Create Resume
            </button>
          </form>
        </Modal>
      )}

      {/* Upload Resume Modal */}
      {showUploadResume && (
        <Modal
          title="Upload Resume"
          onClose={() => setShowUploadResume(false)}
        >
          <form onSubmit={uploadResume}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600"
              required
            />
            <label
              htmlFor="resume-input"
              className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-400 rounded-md p-6 text-slate-400 hover:border-green-500 hover:text-green-600 cursor-pointer"
            >
              {resume ? (
                <p className="text-green-600">{resume.name}</p>
              ) : (
                <>
                  <UploadCloudIcon className="size-12" />
                  <p>Upload PDF Resume</p>
                </>
              )}
            </label>
            <input
              type="file"
              id="resume-input"
              accept=".pdf"
              hidden
              onChange={(e) => setResume(e.target.files[0])}
            />

            <button
              disabled={isLoading}
              className="w-full py-2 bg-green-600 text-white rounded mt-4 hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              {isLoading && (
                <LoaderCircleIcon className="animate-spin size-4 text-white" />
              )}
              {isLoading ? "Uploading..." : "Upload Resume"}
            </button>
          </form>
        </Modal>
      )}

      {/* Edit Title Modal */}
      {editResumeId && (
        <Modal title="Edit Resume Title" onClose={() => setEditResumeId("")}>
          <form onSubmit={editTitle}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600"
              required
            />
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Update
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, title, onClose }) => (
  <div
    onClick={onClose}
    className="fixed inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-lg shadow-md w-full max-w-sm p-6"
    >
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
        {title}
      </h2>
      {children}
      <XIcon
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
        onClick={onClose}
      />
    </div>
  </div>
);

export default Dashboard;
