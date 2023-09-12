import { WeigthCase } from "./typos";
import BodyM from './assets/body/body-m.svg'
import BodyH from './assets/body/body-h.svg'
import BodyL from './assets/body/body-l.svg'
import Body from './assets/body/body.svg'


const Cases: {[key: string]: WeigthCase} = {
    Severe_Thinness: {
        caseName: "Severe Thinness",
    img: BodyH,
        feedback: `Severe thinness is a critical health condition that demands
        immediate attention. If you or someone you know is grappling with severe
        thinness remember that is a severe health issue that necessitates professional guidance.`
        ,
        steps: [
            {
                title: "Professional Intervention",
                body: `Urgently seek assistance from a healthcare provider, preferably a physician or registered dietitian. They can thoroughly assess your situation, identify root causes, and devise a personalized treatment plan.`
            },
            {
                title: "Nutritional Evaluation",
                body: "Collaborate with a healthcare expert to evaluate your nutritional status. Gain insight into your dietary requirements and adopt a well-balanced eating regimen tailored to your specific circumstances."
            },
            {
                title: "Gradual Weight Restoration",
                body: "Prioritize gradual and consistent weight gain over rapid fluctuations, as rapid changes can jeopardize your overall health. Your healthcare provider will guide you in establishing realistic weight gain goals."
            },
            {
                title: "Psychological Support",
                body: "Consider professional therapy or counseling to address the emotional aspects linked to your condition, particularly if it relates to an eating disorder or body image issues"
            },
            {
                title: "Patience and Persistence",
                body: "Realize that recovery from severe thinness is a gradual process that may require time. Exercise patience, stay dedicated to your treatment plan, and celebrate small victories along the way"
            }

        ]
    },
    Mild_Thinness:{
        caseName: "Mild Thinness",
        img: BodyM,
        feedback: `Mild thinness is a condition that should be addressed with care and attention to ensure your well-being.
         If you or someone you know is experiencing mild thinness,
         consider the following steps to promote a healthier lifestyle`
        ,
        steps: [
            {
                title: "Consult a Healthcare Professional",
                body: ` Begin by seeking guidance from a healthcare provider, preferably a physician or registered dietitian. They can assess your current health status, identify contributing factors, and develop a personalized plan for improvement.`
            },
            {
                title: "Nutritional Evaluation",
                body: "Collaborate with a healthcare expert to evaluate your nutritional status. Gain insight into your dietary requirements and adopt a well-balanced eating regimen tailored to your specific circumstances."
            },
            {
                title: "Gradual Weight Restoration",
                body: "Prioritize gradual and consistent weight gain over rapid fluctuations, as rapid changes can jeopardize your overall health. Your healthcare provider will guide you in establishing realistic weight gain goals."
            },
            {
                title: "Psychological Support",
                body: "Consider professional therapy or counseling to address the emotional aspects linked to your condition, particularly if it relates to an eating disorder or body image issues"
            },
            {
                title: "Patience and Persistence",
                body: "Realize that recovery from severe thinness is a gradual process that may require time. Exercise patience, stay dedicated to your treatment plan, and celebrate small victories along the way"
            }

        ]
    },
    Moderate_Thinness:{
        caseName: "Moderate Thinness",
        img: BodyM,
        feedback: `Moderate thinness is a health concern that should not be overlooked. Promptly seeking
        guidance from a healthcare professional is crucial to ensure your health and well-being are
        safeguarded.`
        ,
        steps: [
            {
                title: "Consult a Healthcare Professional",
                body: "Do not underestimate the significance of your condition. Seek immediate consultation with a healthcare provider, ideally a physician or registered dietitian, who can assess your health, identify contributing factors, and recommend appropriate steps for improvement."
            },
            {
                title: "Nutritional Assessment",
                body: "Collaborate with a healthcare expert to assess your nutritional status accurately. Gain insights into your dietary needs and consider adopting a balanced meal plan tailored to your specific requirements."
            },
            {
                title: "Gradual Weight Maintenance",
                body: "Strive for gradual and sustainable weight maintenance rather than extreme fluctuations in either direction. Rapid changes in weight can pose potential health risks. Your healthcare provider can help you establish realistic and achievable goals."
            },
            {
                title: "Psychological Support",
                body: "Consider seeking professional counseling or therapy to address any emotional aspects related to your condition, particularly if it is linked to eating habits or body image concerns."
            }
        ]
    },
    Normal_weigth: {
        caseName: "Normal",
        img: BodyL,
        feedback: `A normal weight is just one aspect of overall health. Prioritize your well-being through
        a balanced and healthy lifestyle, and consult with a healthcare provider if you have any concerns
        about your weight or health.`
        ,
        steps: [
            {
                title: "Regular Health Check-Ups",
                body: "It's vital to prioritize regular health check-ups with a healthcare provider to monitor your overall health status. These check-ups can help detect any health issues early, even if you are within a normal weight range."
            },
            {
                title: "Mindful Eating",
                body: "Practice mindful eating to ensure you're meeting your body's nutritional needs and avoid overindulging or restrictive eating behaviors."
            },
            {
                title: "Emotional and Mental Well-Being",
                body: "Pay attention to your emotional and mental well-being, as these factors can influence your eating habits and weight. Seek support or counseling if needed."
            }
        ]
    },
    Overweight: {
        caseName: "Overweight",
        img: Body,
        feedback: `Overweight or obesity can impact your health, but taking proactive steps to address it can 
        lead to a healthier and more fulfilling life. Your health is a valuable asset, and you have the
        power to make positive changes`,
        steps: [
            {
                title: "Seek Professional Guidance",
                body: "It's a positive step to consider seeking guidance from a healthcare provider, such as a doctor or registered dietitian. They can help you create a tailored plan to address your specific needs and goals"
            },
            {
                title: "Healthy Lifestyle Changes",
                body: "Focus on adopting a balanced and sustainable lifestyle that includes a nutritious diet and regular physical activity. Small, gradual changes can lead to significant improvements in health over time."
            },
            {
                title: "Regular Health Check-Ups",
                body: "It's vital to prioritize regular health check-ups with a healthcare provider to monitor your overall health status. These check-ups can help detect any health issues early, even if you are within a normal weight range."
            },
            {
                title: "Mindful Eating",
                body: "Practice mindful eating to ensure you're meeting your body's nutritional needs and avoid overindulging or restrictive eating behaviors."
            },
            {
                title: "Emotional and Mental Well-Being",
                body: "Pay attention to your emotional and mental well-being, as these factors can influence your eating habits and weight. Seek support or counseling if needed."
            }
        ]
    },
    Obesity_ClassI: {
        caseName: "Obese Class I",
        img: BodyM,
        feedback: `Class I obesity, while a health concern, is manageable with the right approach and support.
        It's essential to prioritize your health and well-being, and taking proactive steps to address obesity
        can lead to a healthier and more fulfilling life. Your health is valuable, and you have the potential to make positive changes.`
        ,
        steps: [
            {
                title: "Consult a Healthcare Professional",
                body: "Seek immediate guidance from a healthcare provider, preferably a doctor or registered dietitian, who can assess your health, identify contributing factors, and develop a personalized plan for improvement."
            },
            {
                title: "Lifestyle Changes",
                body: "Focus on adopting a balanced and sustainable lifestyle that includes a nutritious diet and regular physical activity. Small, gradual changes can lead to significant improvements in health over time."
            },
            {
                title: "Portion Control",
                body: "Pay attention to portion sizes to avoid overeating. Practice mindful eating by eating slowly and savoring your meals."
            },
            {
                title: "Regular Physical Activity",
                body: "Incorporate regular physical activity into your routine. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, as recommended by health guidelines."
            },
            {
                title: "Consult a Dietitian",
                body: "Consider consulting a registered dietitian who can provide personalized dietary guidance and help you create a meal plan that supports your health goals."
            },
            {
                title: "Psychological Support",
                body: "Consider seeking professional counseling or therapy to address any emotional aspects related to your condition, particularly if it is linked to eating habits or body image concerns."
            }

        ]
    },
    Obesity_ClassII: {
        caseName: "Obese Class II",
        img: BodyH,
        feedback: `Class II obesity is a serious health condition, but with the right approach, support, and determination, it can be
        managed effectively. Prioritizing your health and well-being is essential, and taking proactive steps to address obesity
        can lead to a healthier and more fulfilling life. Your health is valuable, and you have the potential to make positive changes.`
        ,
        steps: [
            {
                title: "Consult a Healthcare Professional",
                body: "Seek immediate guidance from a healthcare provider, preferably a doctor or registered dietitian, who can assess your health, identify contributing factors, and develop a personalized plan for improvement."
            },
            {
                title: "Medical Assessment",
                body: "Ensure you have regular medical check-ups to monitor your overall health, including blood pressure, cholesterol levels, and blood sugar levels."
            },
            {
                title: "Lifestyle Changes",
                body: "Focus on adopting a balanced and sustainable lifestyle that includes a nutritious diet and regular physical activity. Small, gradual changes can lead to significant improvements in health over time."
            },
            {
                title: "Portion Control",
                body: "Pay attention to portion sizes to avoid overeating. Practice mindful eating by eating slowly and savoring your meals."
            },
            {
                title: "Regular Physical Activity",
                body: "Incorporate regular physical activity into your routine. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, as recommended by health guidelines."
            },
            {
                title: "Consult a Dietitian",
                body: "Consider consulting a registered dietitian who can provide personalized dietary guidance and help you create a meal plan that supports your health goals."
            },
            {
                title: "Psychological Support",
                body: "Consider seeking professional counseling or therapy to address any emotional aspects related to your condition, particularly if it is linked to eating habits or body image concerns."
            }

        ]
    },
    Obesity_ClassIII:{
        caseName: "Obese Class III",
        img: BodyH,
        feedback: `Class III obesity is a severe health condition that requires dedicated effort and professional support to address effectively. 
        Your health and well-being are of utmost importance, and with the right approach and guidance from healthcare professionals, you can
         work toward achieving a healthier and more fulfilling life. Remember that your health is valuable, and you have the potential to make positive changes for your future.`
        ,
        steps: [
            {
                title: "Consult a Healthcare Professional",
                body: "Seek urgent guidance from a healthcare provider who specializes in obesity management. This may involve consulting a bariatric surgeon, endocrinologist, or a healthcare team experienced in treating severe obesity"
            },
            {
                title: "Medical Assessment",
                body: "Ensure you have regular medical check-ups to monitor your overall health, including blood pressure, cholesterol levels, and blood sugar levels."
            },
            {
                title: "Lifestyle Overhaul",
                body: "Focus on making significant and sustainable lifestyle changes. This includes adopting a balanced diet, engaging in regular physical activity, and addressing emotional or stress-related eating habits."
            },
            {
                title: "Nutrition and Portion Control",
                body: "Work with a registered dietitian to develop a personalized meal plan that supports weight loss and overall health. Learn to make healthier food choices and practice portion control."
            },
            {
                title: "Regular Physical Activity",
                body: " Incorporate regular physical activity into your daily routine. Aim for a combination of aerobic exercises and strength training. Gradually increase the duration and intensity of your workouts as your fitness improves."
            },
            {
                title: "Consult a Dietitian",
                body: "Consider consulting a registered dietitian who can provide personalized dietary guidance and help you create a meal plan that supports your health goals."
            },
            {
                title: "Psychological Support",
                body: "Consider seeking professional counseling or therapy to address any emotional aspects related to your condition, particularly if it is linked to eating habits or body image concerns."
            }
        ]
    }
}

export default Cases;