var tipuesearch = {"pages": [{"url": "https://langheran.github.io/post/understanding-dlibs-neural-networks/", "text": "Dlib C++ library contains many machine learning algorithms: Deep Leaning, SMO-SVM, Multiclass SVM, Structural SVM, Online SVM, Semidefinite Metric Learning, clusterinf algorithms, RBF nets and MLP\u2019s. In this review we\u2019ll specifically focus on the deep learning side. First, we\u2019ll show you how to configure the tran.h file and tailor the net object to your needs. Then, we\u2019ll see how to configure the hyperparameters on the . Network Architecture The library provides two introductory files for deep learning: dnn_introduction_ex.cpp dnn_introduction2_ex.cpp \\[\n\\left\\{\n\\begin{align}\n\\dot{x} & = \\sigma(y-x) \\newline\n\\dot{y} & = \\rho x - y - xz \\newline\n\\dot{z} & = -\\beta z + xy\n\\end{align}\n\\right.\n\\] Hyperparameters First, hyperparameters for the SGD are set in the net initialization. net_type net; dnn_trainer < net_type > trainer(net, sgd( weight_decay , momentum )); Then we set the remaining parameters for the SGD: trainer.set_ learning_rate (initial_learning_rate);\ntrainer.set_ learning_rate_shrink_factor (learning_rate_shrink_factor);\ntrainer.set_ min_learning_rate (min_learning_rate);\ntrainer.set_ iterations_without_progress _threshold(iterations_without_progress_threshold);\ntrainer.set_ test_iterations_without_progress _threshold(test_iterations_without_progress_threshold);", "tags": "dlib cnn neural-network", "title": "Understanding Dlib's Neural Networks - Langheran's Code"}]};