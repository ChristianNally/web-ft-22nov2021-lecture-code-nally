-- Clinics
-- id
-- address

-- clinic_patient
-- clinic_id
-- patient_id


-- Patients
-- id
-- name
-- email

SELECT clinics.address, patients.name
FROM clinics 
JOIN clinic_patient ON clinic_id = clinics.id
JOIN patients ON patients.id = patient_id;


-- clinic                            patient
-- Main Street Hospital              Mr. Joe
-- Main Street Hospital              Mrs. Doe
-- Quakery Parlour                   Mr. Joe

