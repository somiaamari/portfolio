const projects = [
  {
    slug: 'multimodal-enterprise-rag',
    title: 'Multimodal Enterprise RAG',
    description:
      'Upload a PDF, retrieve relevant text and image captions, then ask source-grounded questions using hosted embeddings and a vector database.',
    category: 'Full-Stack',
    filter: 'full-stack',
    role: 'Project developer',
    stack: ['Chainlit', 'LlamaIndex', 'Qdrant', 'Groq', 'Hugging Face'],
    repository: 'https://github.com/somiaamari/Multimodal-Enterprise-RAG',
  },
  {
    slug: 'paris-2024-glory-path',
    title: 'Paris 2024 Glory Path Dashboard',
    description:
      'Explore Paris 2024 athlete, medal, event, and regional data through an interactive dashboard, with an evaluated podium-classification model.',
    category: 'Data',
    filter: 'full-stack',
    role: 'Dashboard and model development',
    stack: ['Streamlit', 'Python', 'Pandas', 'Plotly', 'scikit-learn'],
    repository: 'https://github.com/somiaamari/Olympics-performance-dashboard-',
  },
  {
    slug: 'child-development-screening',
    title: 'Child Development Screening Prototype',
    description:
      'An educational questionnaire prototype that summarizes caregiver observations and demonstrates reproducible model evaluation, with clear non-diagnostic safeguards.',
    category: 'AI / ML',
    filter: 'ai-data',
    role: 'Project developer',
    stack: ['Streamlit', 'Python', 'scikit-learn', 'Gaussian Naive Bayes'],
    repository: 'https://github.com/somiaamari/Autism_prediction_ai_tool',
    demo: 'https://autismpredictionaitool-y6pd5wsvwclki75yeyvqhf.streamlit.app/',
  },
  {
    slug: 'emotion-recognition',
    title: 'Facial Emotion Recognition',
    description:
      'A Streamlit application applies a trained convolutional neural network to an uploaded face image and returns predictions across seven emotion labels.',
    category: 'AI / ML',
    filter: 'ai-data',
    role: 'Deep learning and model development',
    stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
    repository: 'https://github.com/somiaamari/Emotion-Recognition',
  },
  {
    slug: 'smart-home-mlops',
    title: 'Smart Home Activity Recognition',
    description:
      'A smart-home sensor project combining activity recognition, association-rule mining, MLflow experiment tracking, and Flask APIs.',
    category: 'MLOps',
    filter: 'ai-data',
    role: 'Project developer',
    stack: ['Python', 'Flask', 'MLflow', 'Pandas', 'scikit-learn'],
    repository: 'https://github.com/somiaamari/MLops-MiniProjet',
  },
  {
    slug: 'real-time-retail-video-analytics',
    title: 'Real-Time Retail Video Analytics',
    description:
      'A Python video pipeline supports file and camera input, baseline YOLO object detection, annotated output, and latency benchmarking; tracking and analytics are on the roadmap.',
    category: 'AI / ML',
    filter: 'ai-data',
    role: 'Project developer',
    stack: ['Python', 'OpenCV', 'YOLO', 'Pytest'],
    repository: 'https://github.com/somiaamari/realtime-retail-analytics',
  },
]

export default projects
