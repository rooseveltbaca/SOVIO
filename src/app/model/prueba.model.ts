export interface Prueba {
            sequence: string;
            name: string;
            instruction: string;
            time: string;
            order: string;
            type: number;
            data: {
                INSTRUCCION: [
                    {
                        id: number;
                        title: string;
                        imageUrl: string;
                        order: string;
                        description: string;
                        sequence: string;
                        type: string;
                        response: string;
                        value: string;
                        answers: [
                            {
                                id: number;
                                title: string;
                                description: string;
                                sequence: string;
                                order: string;
                                value: string;
                                imageUrl: string;
                            }
                        ]
                    }
                ];
                TEST: [
                    {
                        id: number;
                        title: string;
                        imageUrl: string;
                        order: string;
                        description: string;
                        sequence: string;
                        type: string;
                        response: string;
                        value: string;
                        answers: [
                            {
                                id: number;
                                title: string;
                                description: string;
                                sequence: string;
                                order: string;
                                value: string;
                                imageUrl: string;
                            }
                        ]
                    }
                ];
                PRACTICE: [
                    {
                        id: number;
                        title: string;
                        imageUrl: string;
                        order: string;
                        description: string;
                        sequence: string;
                        type: string;
                        response: string;
                        value: string;
                        answers: [
                            {
                                id: number;
                                title: string;
                                description: string;
                                sequence: string;
                                order: string;
                                value: string;
                                imageUrl: string;
                            }
                        ]
                    }
                ]
            }
        }

