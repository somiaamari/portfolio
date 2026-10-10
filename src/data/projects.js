const projects = [
  {
    slug: 'meetly',
    title: 'Meetly',
    description:
      'An intelligent meeting platform for Algerian Darja, using fine-tuned Whisper large-v3 for speech recognition, speaker diarization, and automatic summarization, with Arabic/French code-switching support.',
    category: 'AI / Full-Stack',
    filter: 'full-stack',
    role: 'Team project',
    stack: ['FastAPI', 'React', 'Whisper large-v3', 'LoRA / PEFT', 'pyannote.audio', 'LLM'],
  },
  {
    slug: 'multimodal-enterprise-rag',
    title: 'Multimodal Enterprise RAG',
    description:
      'A RAG agent that answers questions about PDF documents with source citations, using vector search, cross-encoder reranking, and Self-RAG to evaluate relevance and reduce hallucinations.',
    category: 'AI / Full-Stack',
    filter: 'full-stack',
    role: 'Project developer',
    stack: ['LlamaParse', 'Qdrant', 'Groq', 'LlamaIndex', 'Chainlit', 'Docker'],
    repository: 'https://github.com/somiaamari/Multimodal-Enterprise-RAG',
  },
  {
    slug: 'emotion-recognition',
    title: 'Emotion Recognition',
    description:
      'A facial emotion recognition model trained to classify seven emotions from the FER dataset, with a Streamlit web application.',
    category: 'AI / ML',
    filter: 'ai-data',
    role: 'Deep learning model design and development (team project)',
    stack: ['Python', 'CNN', 'Keras', 'TensorFlow', 'Batch Normalization', 'Dropout', 'Adam', 'Streamlit'],
    repository: 'https://github.com/somiaamari/Emotion-Recognition',
  },
  {
    slug: 'text-summarization',
    title: 'Text Summarization',
    description:
      'An NLP web app for abstractive text summarization with a fine-tuned BART model, PDF or text input, summary history, statistics, and PDF report export.',
    category: 'NLP',
    filter: 'ai-data',
    role: 'Team project',
    stack: ['Python', 'NLP', 'BART', 'Streamlit'],
    repository: 'https://github.com/soummarin/NLP_project',
  },
  {
    slug: 'autism-detection',
    title: 'Autism Detection',
    description:
      'A machine learning project exploring behavioral data to identify autistic traits in children through exploratory data analysis and classification.',
    category: 'AI / ML',
    filter: 'ai-data',
    role: 'Project developer',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    repository: 'https://github.com/somiaamari/Autism_prediction_ai_tool',
    demo: 'https://autismpredictionaitool-y6pd5wsvwclki75yeyvqhf.streamlit.app/',
  },
  {
    slug: 'eduworld',
    title: 'EduWorld',
    description:
      'A full-stack online course platform with secure authentication and role-based access control.',
    category: 'Full-Stack',
    filter: 'full-stack',
    role: 'Project developer',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Tailwind', 'HTML', 'CSS'],
  },
  {
    slug: 'supp-hours',
    title: 'Supp Hours',
    description:
      'A web application for managing overtime, with secure authentication and role-based access control.',
    category: 'Full-Stack',
    filter: 'full-stack',
    role: 'Project developer',
    stack: ['Node.js', 'Express.js', 'MySQL'],
    repository: 'https://github.com/ONECSPROJECT',
  },
  {
    slug: 'myvet',
    title: 'MyVet',
    description: 'An e-commerce project with high-fidelity user-interface mockups.',
    category: 'UI / UX Design',
    filter: 'design',
    role: 'UI/UX Designer',
    stack: ['Figma'],
  },
  {
    slug: 'paris-2024-glory-path',
    title: 'Paris 2024 Glory Path Dashboard',
    description:
      'Explore Paris 2024 athlete, medal, event, and regional data through an interactive dashboard, with an evaluated podium-classification model.',
    category: 'Data',
    filter: 'ai-data',
    role: 'Dashboard and model development',
    stack: ['Streamlit', 'Python', 'Pandas', 'Plotly', 'scikit-learn'],
    repository: 'https://github.com/somiaamari/Olympics-performance-dashboard-',
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
      'An in-progress Python video pipeline with file and camera input, baseline YOLO object detection, annotated output, and latency benchmarking. Tracking and analytics remain on the roadmap.',
    category: 'AI / ML',
    filter: 'ai-data',
    status: 'In progress',
    role: 'Project developer',
    stack: ['Python', 'OpenCV', 'YOLO', 'Pytest'],
    repository: 'https://github.com/somiaamari/realtime-retail-analytics',
  },
]

export default projects
