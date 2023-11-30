import { classNames } from "~/app/utils/helpers";

export type STIconProps = {
  className?: string;
};

export const STIcon: React.FC<STIconProps> = ({ className = "" }) => {
  return (
    <div className={classNames("text-white", className)}>
      <svg
        viewBox="0 0 39 44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M11.376 35.504C9.312 35.504 7.32 35.252 5.4 34.748C3.504 34.22 1.956 33.548 0.756 32.732L3.096 27.476C4.224 28.196 5.52 28.796 6.984 29.276C8.472 29.732 9.948 29.96 11.412 29.96C12.396 29.96 13.188 29.876 13.788 29.708C14.388 29.516 14.82 29.276 15.084 28.988C15.372 28.676 15.516 28.316 15.516 27.908C15.516 27.332 15.252 26.876 14.724 26.54C14.196 26.204 13.512 25.928 12.672 25.712C11.832 25.496 10.896 25.28 9.864 25.064C8.856 24.848 7.836 24.572 6.804 24.236C5.796 23.9 4.872 23.468 4.032 22.94C3.192 22.388 2.508 21.68 1.98 20.816C1.452 19.928 1.188 18.812 1.188 17.468C1.188 15.956 1.596 14.588 2.412 13.364C3.252 12.14 4.5 11.156 6.156 10.412C7.812 9.668 9.876 9.296 12.348 9.296C14.004 9.296 15.624 9.488 17.208 9.872C18.816 10.232 20.244 10.772 21.492 11.492L19.296 16.784C18.096 16.136 16.908 15.656 15.732 15.344C14.556 15.008 13.416 14.84 12.312 14.84C11.328 14.84 10.536 14.948 9.936 15.164C9.336 15.356 8.904 15.62 8.64 15.956C8.376 16.292 8.244 16.676 8.244 17.108C8.244 17.66 8.496 18.104 9 18.44C9.528 18.752 10.212 19.016 11.052 19.232C11.916 19.424 12.852 19.628 13.86 19.844C14.892 20.06 15.912 20.336 16.92 20.672C17.952 20.984 18.888 21.416 19.728 21.968C20.568 22.496 21.24 23.204 21.744 24.092C22.272 24.956 22.536 26.048 22.536 27.368C22.536 28.832 22.116 30.188 21.276 31.436C20.46 32.66 19.224 33.644 17.568 34.388C15.936 35.132 13.872 35.504 11.376 35.504Z"
        />
        <path
          fill="currentColor"
          d="M24.208 43V22.552H16.144V17.8H38.104V22.552H30.04V43H24.208Z"
        />
      </svg>
    </div>
  );
};
